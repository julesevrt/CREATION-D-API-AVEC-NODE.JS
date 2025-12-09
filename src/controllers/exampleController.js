// Exemple de contrôleur pour gérer la logique métier
// Les contrôleurs séparent la logique des routes

class ExampleController {
  // Récupérer tous les items
  static getAll(req, res) {
    res.json({
      message: 'Liste de tous les éléments',
      data: []
    });
  }

  // Récupérer un item par ID
  static getById(req, res) {
    const { id } = req.params;
    res.json({
      message: `Élément avec l'ID ${id}`,
      data: { id }
    });
  }

  // Créer un nouvel item
  static create(req, res) {
    const data = req.body;
    res.status(201).json({
      message: 'Élément créé avec succès',
      data
    });
  }

  // Mettre à jour un item
  static update(req, res) {
    const { id } = req.params;
    const data = req.body;
    res.json({
      message: `Élément ${id} mis à jour`,
      data
    });
  }

  // Supprimer un item
  static delete(req, res) {
    const { id } = req.params;
    res.json({
      message: `Élément ${id} supprimé`
    });
  }
}

module.exports = ExampleController;
