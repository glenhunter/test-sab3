/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
@Library(['private-pipeline-library', 'jenkins-shared']) _

mavenPipeline(
  javaVersion: 'OpenJDK 11',
  useMvnw: true,
  usePublicSettingsXmlFile: false,
  runFeatureBranchPolicyEvaluations: true,
  useCheckstyle: true,
  iqPolicyEvaluation: { stage ->
    nexusPolicyEvaluation iqStage: stage, iqApplication: 'iweek-pull-to-start',
      // backend artifacts are picked up via output of clm:index goal
      iqScanPatterns: [[scanPattern: 'frontend/webpack-modules']],
      failBuildOnNetworkError: true
  }
)
