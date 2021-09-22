/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
package com.sonatype.sab.services;

import java.util.List;

import com.sonatype.sab.models.ColophonTechnology;

public interface ColophonService
{
  List<ColophonTechnology> getColophonTechnologiesOrderByName();
}
