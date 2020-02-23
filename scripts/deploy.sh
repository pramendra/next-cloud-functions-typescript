#!/bin/bash
set -e

gcloud functions deploy linc \
--entry-point=next \
--env-vars-file=env.yaml \
--runtime=nodejs10 \
--region=asia-northeast1 \
--source=./dist \
--trigger-http
