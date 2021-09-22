/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
package com.sonatype.sab.services;

import java.util.Comparator;
import java.util.List;

import com.sonatype.sab.models.ColophonTechnology;
import com.sonatype.sab.repositories.ColophonRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ColophonServiceImpl
    implements ColophonService
{
  @Autowired
  ColophonRepository colophonRepository;

  @Override
  public List<ColophonTechnology> getColophonTechnologiesOrderByName() {
    final List<ColophonTechnology> colophonTechnologies = colophonRepository.getColophonTechnologies();
    colophonTechnologies.sort(Comparator.comparing(ColophonTechnology::getName));
    return colophonTechnologies;
  }
}
