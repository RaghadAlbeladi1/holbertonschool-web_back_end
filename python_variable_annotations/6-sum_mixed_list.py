#!/usr/bin/env python3
"""
the module is a function that takes a list of float and returns a float
"""
import typing


def sum_mixed_list(mxd_lst: typing.List[typing.Union[int, float]]) -> float:
    """
    this fucntion takes a list of float retruns its sum as a float
    """
    return float(sum(mxd_lst))
