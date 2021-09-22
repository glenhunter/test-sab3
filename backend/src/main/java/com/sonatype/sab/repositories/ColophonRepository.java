/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
package com.sonatype.sab.repositories;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import com.sonatype.sab.models.ColophonTechnology;

import org.springframework.stereotype.Repository;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

@Repository
public class ColophonRepository
{
  private static final String colophonJsonResourcePath = "colophon.json";

  protected String getColophonJsonResourcePath() {
    return colophonJsonResourcePath;
  }

  public List<ColophonTechnology> getColophonTechnologies() {
    String colophonJson = getResourceContentsAsString(getColophonJsonResourcePath());
    return new Gson().fromJson(colophonJson, new TypeToken<List<ColophonTechnology>>() { }.getType());
  }

  private String getResourceContentsAsString(final String jsonResourcePath) {
    try (InputStream resourceAsStream = this.getClass().getClassLoader().getResourceAsStream(jsonResourcePath)) {
      return new String(resourceAsStream.readAllBytes());
    }
    catch (IOException e) {
      throw new RuntimeException(e);
    }
  }
}
