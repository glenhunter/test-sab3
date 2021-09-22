#!/bin/bash
#
# Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
# "Sonatype" is a trademark of Sonatype, Inc.
#

echo "Clearing out backend example code"

rm backend/src/main/java/com/sonatype/sab/controllers/*.java
rm backend/src/main/java/com/sonatype/sab/models/*.java
rm backend/src/main/java/com/sonatype/sab/repositories/*.java
rm backend/src/main/java/com/sonatype/sab/services/*.java
rm backend/src/test/java/com/sonatype/sab/repositories/*.java

rm backend/src/main/resources/colophon.json
rm -rf backend/src/test/resources

echo "backend code clear"

echo "starting frontend asset cleanup"

pushd frontend

rm -rf src/main/assets/images/example-images/
rm -rf src/main/components
rm -rf src/main/pages
rm -rf src/main/Sidebar*

cp -r ../.empty-reset-folder ./src/main

popd
