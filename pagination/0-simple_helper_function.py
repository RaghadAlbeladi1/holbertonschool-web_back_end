#!/usr/bin/env python3
"""this module with afunction that returns an page index range"""

import typing


def index_range(page: int, page_size: int) -> typing.Tuple:
    """a function that returns page index range"""
    return ((page - 1) * page_size, page * page_size)
