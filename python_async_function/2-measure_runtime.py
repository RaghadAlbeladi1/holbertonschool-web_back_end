#!/usr/bin/env python3
"""this module with afunction that measures sleep of async func """


import asyncio

wait_n = __import__("1-concurrent_coroutines").wait_n


def measure_time(n: int, max_delay: int) -> float:
    """a function measures sleeps from"""
    total_time = asyncio.run(wait_n(n, max_delay))

    return sum(total_time) / n
