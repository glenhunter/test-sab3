/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
package com.sonatype.sab.controllers;

import java.util.List;

import com.sonatype.sab.models.ColophonTechnology;
import com.sonatype.sab.services.ColophonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ColophonController
{
  @Autowired
  private ColophonService colophonService;

  @GetMapping("/colophon")
  public List<ColophonTechnology> getColophon() {
    return colophonService.getColophonTechnologiesOrderByName();
  }
}
