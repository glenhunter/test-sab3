/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
package com.sonatype.sab.models;

import java.net.URI;

import lombok.Data;

@Data
public class ColophonReference
{
  private String title;

  private URI url;
}
