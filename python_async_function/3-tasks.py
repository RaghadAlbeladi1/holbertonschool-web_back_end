#!/usr/bin/env python3
"""this module with afunction that returns a task """


import asyncio
import typing

wait_random = __import__("0-basic_async_syntax").wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """a function that create and retruns a task"""
    task = asyncio.create_task(wait_random(max_delay))

    return task
