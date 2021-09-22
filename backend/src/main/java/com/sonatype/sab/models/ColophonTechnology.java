/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
package com.sonatype.sab.models;

import java.util.List;

import lombok.Data;

@Data
public class ColophonTechnology
{
  private String name;

  private String description;

  private ColophonTechStack techStack;

  private List<ColophonReference> links;
}
