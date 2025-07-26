#!/bin/bash

# Define paths
VAULT_PATH="$HOME/Desktop/notes-vault"
SITE_PATH="$HOME/projects/sam-ai/ds-garden/src/content/docs"

# Ensure SITE_PATH exists
mkdir -p "$SITE_PATH"

# Sync: copy only .md files, mirror folder structure
rsync -av --delete \
  --exclude 'ds-garden/' \
  --exclude '.git/' \
  --exclude '.obsidian/' \
  --include '*/' \
  --include '*.md' \
  --exclude '*' \
  "$VAULT_PATH/" "$SITE_PATH/"