#!/usr/bin/env python3
"""this module is a fucntin that returns a list of docs """
import pymongo


def list_all(mongo_collection):
    """a function that returns a list of the docs"""
    data = list(mongo_collection.find())
    if len(data) == 0:
        return []
    return data
