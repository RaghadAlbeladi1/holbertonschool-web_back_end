#!/usr/bin/env python3
"""this module with afunction that sleeps with a random value """


import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """a function that sleeps with random value"""
    R = random.uniform(0, max_delay)
    await asyncio.sleep(R)
    return R
