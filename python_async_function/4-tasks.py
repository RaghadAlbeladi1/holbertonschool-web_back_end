#!/usr/bin/env python3
"""this module with afunction that uses a task """


import asyncio
import typing

wait_random = __import__("0-basic_async_syntax").wait_random
task_wait_random = __import__("3-tasks").task_wait_random


async def task_wait_n(n: int, max_delay: int) -> typing.List[float]:
    """a function that uses a taask"""

    tasks = [task_wait_random(max_delay) for i in range(n)]
    list_Delays = await asyncio.gather(*tasks)

    return sorted(list_Delays)
