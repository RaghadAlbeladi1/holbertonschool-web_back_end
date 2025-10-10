#!/usr/bin/env python3
"""
the module is a function that takes a str and an
int or float and returns a tuple with str and float
"""
import typing


def to_kv(k: str, v: typing.Union[int, float]) -> typing.Tuple[str, float]:
    """
    this fucntion takes a str and an int or float and returns
     a tuple with str and float
    """
    return (k, float(v ** 2))
