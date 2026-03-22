---
title: "I Used LLMs to Kill Integration Tests. Here's What Actually Happened."
date: "2025-03-20"
tag: "Engineering"
excerpt: "Everyone talks about LLMs writing code. I used them to auto-generate test contracts and eliminated the need to spin up 8 dependent services. Here's the real story — including the parts that didn't work."
---

Here's a problem every backend engineer knows:

You have a service. It depends on 8 other services. You want to write integration tests. So you need to spin up all 8 services, make sure they're configured correctly, make sure they don't flap, manage their state, and *then* run your tests.

By the time you've done all that, half your CI pipeline budget is gone, three services have returned a 503 for reasons nobody understands, and you've wasted an afternoon that could've been spent on literally anything else.

This was the problem I set out to solve.

---

## The idea: contract-based testing, but auto-generated

Contract testing isn't new. The idea is simple: instead of spinning up real dependencies, you define *contracts* — what requests a service sends, what responses it expects — and test against those.

The problem? Writing contracts is tedious. It requires manually specifying every request/response pair for every dependency. Nobody does it. Everyone intends to do it. Nobody does it.

**What if an LLM could generate the contracts automatically?**

This is the bet I made at Google Nest.

## How it works

The system works roughly like this:

1. **Instrument your service** to log all outgoing requests and incoming responses during a real run
2. **Feed the logs to an LLM** with a prompt that asks it to extract structured contracts — "given this request pattern, this is what the dependency is expected to return"
3. **Store the contracts** in a registry
4. **At test time**, spin up lightweight mocks that serve responses based on the contracts — no real services needed

The result: integration tests that run in a hermetic environment, with zero dependency on any external service being up.

## The wins

When it worked, it *really* worked.

- Test success rate went from somewhere around 60-65% (mostly due to flaky dependencies) to **~90%**
- We eliminated the need to launch 8 downstream services in our CI pipeline
- We saved **10,000+ developer hours** — a rough estimate, but conservative

That last number still feels surreal to me. Hours are a funny unit. 10,000 hours is about 5 years of one engineer's time. Distributed across a team, it's dozens of engineers getting a week back.

## The parts that didn't work (immediately)

Let's be honest: LLMs are not magic.

**Problem 1: Contract drift.** Services change their APIs. LLMs generate contracts from historical logs, which means contracts can go stale. We had to build a staleness detection mechanism — basically a canary that periodically runs against real services and flags divergence.

**Problem 2: Non-deterministic responses.** Some services return timestamps, UUIDs, or data that legitimately changes every call. The LLM sometimes struggled to separate "this field changes every time" from "this field should be exactly X." We added explicit annotations in the prompting strategy to handle this.

**Problem 3: Prompt sensitivity.** Small changes to how we prompted the LLM produced meaningfully different contract quality. We ended up writing an evaluation suite specifically for contract quality — essentially, a test for our tests.

## What I'd tell someone building this

1. **Start with the evaluation harness first.** You need a way to measure whether your generated contracts are good before you can iterate on them.
2. **Staleness is your biggest enemy in production.** Plan for it from day one.
3. **LLMs are excellent at extraction tasks.** "Given these logs, give me a structured schema" is a much better use of an LLM than "write me code." It's pattern matching at scale — exactly what they're good at.

---

The system is running in production now. It's not perfect, but it's made a real difference.

And yes, before you ask — the irony of using AI to test services that are probably powered by AI is not lost on me.
