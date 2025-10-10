#!/usr/bin/env python3
"""Description: Collect 10 random numbers using an async comprehension
                 over async_generator and return them.
"""

from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Return list of 10 floats yielded by async_generator."""
    return [number async for number in async_generator()]
