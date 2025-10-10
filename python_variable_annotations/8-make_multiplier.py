#!/usr/bin/env python3
"""
the module is a function that takes
a multiplier and makes a function to multiply it
"""
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """
    this fucntion takes a multiplier and makes a function to multiply it
    """
    return lambda n: n * multiplier
