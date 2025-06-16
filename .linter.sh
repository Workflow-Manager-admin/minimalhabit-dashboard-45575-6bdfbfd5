#!/bin/bash
cd /home/kavia/workspace/code-generation/minimalhabit-dashboard-45575-6bdfbfd5/streakflow_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

