#!/bin/bash

REPONAME=${1:-fedora}

dnf repograph --repoid $REPONAME | cat - | tail -n +2 > data/$REPONAME.dot
