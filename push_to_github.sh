#!/bin/bash

# Script pour automatiser le processus de push vers GitHub.
# Script to automate the process of pushing to GitHub.

# Couleurs pour une meilleure lisibilité
# Colors for better readability
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Demander le message de commit à l'utilisateur.
# 1. Ask the user for the commit message.
echo -e "${YELLOW}Entrez votre message de commit (ou laissez vide pour un message par défaut) :${NC}"
read commit_message

# 2. Si aucun message n'est fourni, utiliser un message par défaut.
# 2. If no message is provided, use a default one.
if [ -z "$commit_message" ]; then
  commit_message="Mise à jour automatique du projet"
fi

# 3. Exécuter les commandes Git.
# 3. Execute Git commands.
echo -e "\n${GREEN}--- Ajout des fichiers au stage... ---${NC}"
git add .

echo -e "\n${GREEN}--- Création du commit avec le message : '$commit_message' ---${NC}"
git commit -m "$commit_message"

echo -e "\n${GREEN}--- Push vers la branche 'main' de 'origin'... ---${NC}"
git push origin main

echo -e "\n${GREEN} Push terminé avec succès !${NC}"