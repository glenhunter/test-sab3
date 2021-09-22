/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
package com.sonatype.sab.repositories;

import java.util.List;

import com.sonatype.sab.models.ColophonReference;
import com.sonatype.sab.models.ColophonTechnology;
import com.sonatype.sab.models.ColophonTechStack;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class ColophonRepositoryTest
{
  private static ColophonRepository repository;

  @BeforeAll
  static void before() {
    repository = new ColophonRepositoryForTest();
  }

  @Test
  public void getColophonTechnologiesReturnsListFromConfiguredJson() {
    List<ColophonTechnology> colophonTechnologies = repository.getColophonTechnologies();
    assertFalse(colophonTechnologies.isEmpty());
    assertEquals(2, colophonTechnologies.size(), 0);

    ColophonTechnology first = colophonTechnologies.get(0);
    ColophonTechnology second = colophonTechnologies.get(1);

    assertEquals("Foo", first.getName());
    assertEquals(ColophonTechStack.FRONTEND, first.getTechStack());
    assertEquals("Foo bar", first.getDescription());

    List<ColophonReference> firstLinks = first.getLinks();

    assertEquals(1, firstLinks.size());
    assertEquals("FooSite", firstLinks.get(0).getTitle());
    assertEquals("https://foo.example.com/", firstLinks.get(0).getUrl().toString());

    assertEquals("Acme", second.getName());
    assertEquals(ColophonTechStack.BACKEND, second.getTechStack());
    assertEquals("Supplies for catching cartoon birds", second.getDescription());

    List<ColophonReference> secondLinks = second.getLinks();

    assertEquals(2, secondLinks.size());
    assertEquals("Anvils", secondLinks.get(0).getTitle());
    assertEquals("https://acme.example.com/anvil", secondLinks.get(0).getUrl().toString());
    assertEquals("Dynamite", secondLinks.get(1).getTitle());
    assertEquals("https://acme.example.com/kaboom", secondLinks.get(1).getUrl().toString());
  }

  /**
   * Private Test class to override the colophon source.
   */
  private static class ColophonRepositoryForTest
      extends ColophonRepository
  {
    @Override
    protected String getColophonJsonResourcePath() {
      return "colophonForTest.json";
    }
  }
}
