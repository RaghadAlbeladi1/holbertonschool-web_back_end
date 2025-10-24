#!/usr/bin/env python3
"""this module is a fucntin that updates data to a collection"""
import pymongo


def update_topics(mongo_collection, name, topics):
    """a function that updates data to a collection"""
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
