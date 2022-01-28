#!/bin/bash
echo "###### RUN TEST ######"
npm run e2e conf.docker.js

echo ""
echo ""

echo "###### Generate Results ######"
npm run posttest

echo "###### Results Generate ######"