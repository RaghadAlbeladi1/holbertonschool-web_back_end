#!/usr/bin/env python3
"""this module with afunction that returns an page index range"""

import csv
import math
from typing import List, Tuple


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """a function that returns the pages needed"""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        if self.__dataset is None:
            self.dataset()

        start_range, end_range = index_range(page, page_size)

        if end_range > len(self.__dataset):
            return []
        return self.__dataset[start_range:end_range]


def index_range(page: int, page_size: int) -> Tuple:
    """a function that returns page index range"""
    return ((page - 1) * page_size, page * page_size)
