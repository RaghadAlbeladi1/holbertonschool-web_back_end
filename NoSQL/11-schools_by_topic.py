#!/usr/bin/env python3
"""this module is a fucntin that finds data in a collection"""
import pymongo


def schools_by_topic(mongo_collection, topic):
    """a function that finds data in a collection"""
    return mongo_collection.find({"topics": {"$eq": topic}})
