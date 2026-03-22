---
title: "Distributed Systems are Like Go-Karting (Hear Me Out)"
date: "2025-02-10"
tag: "Engineering"
excerpt: "I've spent years thinking about distributed systems and years go-karting. Turns out the mental models overlap more than you'd expect. A completely serious engineering post that definitely isn't an excuse to talk about go-karts."
---

I go go-karting a lot. Maybe too much. And somewhere between a late apex at turn 3 and a questionable overtaking maneuver, I realized something:

**Go-karting is basically a distributed system.**

Stay with me.

---

## The track is your network

On a go-kart track, information travels at the speed of... well, you looking at other karts. You can only see what's in front of you, slightly behind you, and maybe what the marshals are signaling if you're paying attention.

This is exactly the **partial visibility** problem in distributed systems. Your node knows its own state. It has limited, potentially stale information about other nodes. It has to make decisions in real-time despite incomplete data.

When you're 2 karts back in a pack and you can't see the kart at the front braking, you're experiencing **information delay**. In distributed systems, we call this **latency**. The difference is that at 60km/h, a 200ms information delay has more immediate consequences.

## Consistency is a spectrum

Here's where it gets interesting.

**Strict consistency** would mean every kart on the track has perfect, real-time knowledge of every other kart's position and speed. This is physically impossible (and would require telepathy).

**Eventual consistency** is what actually happens. You observe the kart in front of you, infer where the karts you can't see probably are based on timing, and make a best-guess decision. Most of the time it works. Occasionally you get it catastrophically wrong and there are cones everywhere.

This is CAP theorem, but with rubber instead of TCP.

## Failure modes are the fun part

In distributed systems, the interesting failures are the ones that look like success for a while before everything falls apart.

Go-karting has the exact same pattern.

The "split-brain" scenario: two karts both believe they have the racing line into a corner. Neither is technically wrong based on their own information. The resolution involves bumpers and bruised egos.

The "cascading failure": one kart spins. The kart behind brakes. The kart behind that brakes harder. The kart behind *that* is now involved in a 4-kart accordion because of one bad decision at the front of the chain. In systems, we call this **the thundering herd problem**.

## What go-karting taught me about systems design

1. **Optimize for the common case.** Most laps are clean. Design your happy path to be fast and efficient. Handle the edge cases, but don't let them dominate your architecture.

2. **Fail fast, recover fast.** A kart that wobbles and recovers in half a second is better than one that slowly slides off the track over 3 seconds. Same with systems: fast failure detection beats slow degradation.

3. **Backpressure is real.** You can't brake at the same point as the kart in front of you if you're going faster. You need to account for the state of the system *ahead* of you. API rate limiting is basically this.

4. **The observer changes the system.** When you drive defensively because there's a marshal watching, you change the race dynamics. Monitoring your production system changes how it behaves — instrumentation overhead is real.

---

Is this a perfect analogy? No. Go-karts don't have consensus protocols and distributed systems rarely involve helmets (though sometimes I think they should).

But the mental models — partial information, consistency tradeoffs, failure cascades, adaptive decision making under uncertainty — transfer surprisingly well.

Next time you're debugging a distributed systems problem, I recommend going go-karting first. Probably won't help. But you'll feel better about it.

---

*Opinions expressed are my own. Google does not endorse using motorsport analogies in production architecture docs, though I haven't tried.*
