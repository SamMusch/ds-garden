#!/bin/bash

# Define paths
VAULT_PATH="$HOME/Desktop/notes-vault"
SITE_PATH="$HOME/projects/sam-ai/ds-garden/src/content/docs"

# Ensure SITE_PATH exists
mkdir -p "$SITE_PATH"

# Sync: copy only .md files, mirror folder structure
rsync -av \
  --include '*/' \
  --include '*.md' \
  --exclude '*' \
  --exclude '.git/' \
  --exclude '.obsidian/' \
  "$VAULT_PATH/" "$SITE_PATH/"
