#!/usr/bin/env python3
"""this module is a fucntin that inserts data to a collection"""
import pymongo


def insert_school(mongo_collection, **kwargs):
    """a function that inserts data to a collection"""
    return mongo_collection.insert_one(kwargs).inserted_id
