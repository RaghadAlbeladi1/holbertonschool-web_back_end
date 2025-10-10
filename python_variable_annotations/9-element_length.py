#!/usr/bin/env python3
"""
the module is a function that takes
a an iterable and retruns a list of tuples
"""
import typing


def element_length(
    lst: typing.Iterable[typing.Sequence],
) -> typing.List[typing.Tuple[typing.Sequence, int]]:
    """
    this fucntion takes an iterable and retruns a list of tuples
    """
    return [(i, len(i)) for i in lst]
