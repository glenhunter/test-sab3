/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
package com.sonatype.sab.configuration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class BackendTemplateConfiguration
{
  private static final Logger LOG = LoggerFactory.getLogger(BackendTemplateConfiguration.class);

  @Bean
  public WebMvcConfigurer corsConfigurer(@Value("${frontendhost}") final String[] hosts) {
    return new WebMvcConfigurer()
    {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        LOG.info("Adding in {} hosts for cross origin requests.", String.join(" : ", hosts));
        registry.addMapping("/*").allowedOrigins(hosts);
      }
    };
  }
}
