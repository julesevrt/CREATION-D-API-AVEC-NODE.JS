// Exemple de modèle de données
// Ce fichier définit la structure des données

class ExampleModel {
  constructor(data) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.description = data.description || '';
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  // Valider les données
  validate() {
    if (!this.name) {
      throw new Error('Le nom est requis');
    }
    return true;
  }

  // Convertir en objet simple
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

module.exports = ExampleModel;
