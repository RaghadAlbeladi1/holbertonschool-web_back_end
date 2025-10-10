#!/usr/bin/env python3
"""Generator that yields 10 random floats between 0 and 10 asynchronously."""

from asyncio import sleep
from random import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Yield a random float between 0 and 10 every second, 10 times."""
    for _ in range(10):
        await sleep(1)
        yield 10 * random()
