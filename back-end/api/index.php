
<?php
// Configuration des erreurs
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Configuration des en-têtes CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

// Inclure le fichier de connexion à la base de données
include 'DbConnect.php';

// Créer une instance de DbConnect et se connecter à la base de données
$objDb = new DbConnect();
$conn = $objDb->connect();

// Obtenir la méthode HTTP de la requête
$method = $_SERVER['REQUEST_METHOD'];

// Obtenir l'ID de l'utilisateur de l'URL
$path = explode('/', $_SERVER['REQUEST_URI']);
$id = isset($path[3]) ? (int)$path[3] : null;

// Traiter les différentes méthodes HTTP
switch ($method) {
    case "DELETE":
        // Supprimer un utilisateur par ID
        if ($id) {
            $sql = "DELETE FROM users WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
        } else {
            echo json_encode(['status' => 0, 'message' => 'User ID not provided for deletion.']);
        }
        break;
        
    case "GET":
        if ($id) {
            // Récupérer un utilisateur par ID
            $sql = "SELECT * FROM users WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($user);
        } else {
            // Récupérer tous les utilisateurs
            $sql = "SELECT * FROM users";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($users);
        }
        break;

    case "POST":
        // Ajouter un nouvel utilisateur
        $user = json_decode(file_get_contents('php://input'), true);
        $sql = "INSERT INTO users (name, email, mobile, created_at) VALUES (:name, :email, :mobile, :created_at)";
        $stmt = $conn->prepare($sql);
        $created_at = date('Y-m-d');
        $stmt->bindParam(':name', $user['name']);
        $stmt->bindParam(':email', $user['email']);
        $stmt->bindParam(':mobile', $user['mobile']);
        $stmt->bindParam(':created_at', $created_at);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

    case "PUT":
        // Mettre à jour un utilisateur
        if ($id) {
            $user = json_decode(file_get_contents('php://input'), true);
            $sql = "UPDATE users SET name = :name, email = :email, mobile = :mobile, updated_at = :updated_at WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $updated_at = date('Y-m-d');
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
            $stmt->bindParam(':name', $user['name']);
            $stmt->bindParam(':email', $user['email']);
            $stmt->bindParam(':mobile', $user['mobile']);
            $stmt->bindParam(':updated_at', $updated_at);

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
        } else {
            echo json_encode(['status' => 0, 'message' => 'User ID not provided for update.']);
        }
        break;

    case "DELETE":
        // Supprimer un utilisateur
        if ($id) {
            $sql = "DELETE FROM users WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
        } else {
            echo json_encode(['status' => 0, 'message' => 'User ID not provided for deletion.']);
        }
        break;

    default:
        echo json_encode(['status' => 0, 'message' => 'Invalid HTTP method.']);
        break;
}
?>
