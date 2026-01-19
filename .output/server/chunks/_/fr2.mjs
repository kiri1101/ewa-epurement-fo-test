var meta = {
	title: {
		login: "Se connecter",
		forgot_password: "Mot de passe oublier",
		update_password: "Mettre à jour le mot de passe",
		dashboard: "Tableau de bord",
		account: "Mes comptes",
		beneficiary: "Mes bénéficiaires",
		transfer: "Mes transferts",
		profile: {
			infos: "Mes informations",
			users: "Mes utilisateurs"
		}
	}
};
var page = {
	login: {
		form_title: "Connectez-vous",
		intro_msg: {
			part1: "Faites votre",
			part2: "demande de transfer en ligne",
			part3: "dès maintenant!"
		},
		forgot_password: "Have you forgotten your password?",
		security: "Plateform sécurisé"
	},
	forgot_password: {
		form_title: "Vérification 2Fa",
		intro_msg: {
			part1: "Un code de vérification a été envoyé à votre email",
			part2: "Entrez-le ci-dessous."
		},
		resend_code: "Renvoyer le code dans:",
		resend_code_link: "Code non reçu?",
		resend_code_button: "Renvoyer le code"
	},
	update_password: {
		form_title: "Mettre à jour votre mot de passe"
	},
	beneficiary: {
		title: "Gérez les personnes à qui vous envoyez de l'argent",
		status: {
			active: "Actif",
			block: "Bloquer",
			archive: "Archiver"
		}
	}
};
var button = {
	login: "Connexion",
	verify_code: "Vérifier le code",
	update_password: "Mettre à jour le mot de passe",
	logout: "Déconnexion"
};
var placeholder = {
	pseudo: "Pseudo ou email",
	new_password: "Nouveau mot de passe",
	confirm_new_password: "Confirmer le nouveau mot de passe"
};
var success = {
	welcome: "Bienvenu à :bankName",
	collaborator_created: "Nouveau collaborateur créé",
	file_uploaded: "Fichier téléchargé avec succès"
};
var validation = {
	required: "Ce champ est obligatoire.",
	min: "Ce champ est réquis et doit contenir plus de :value caractères.",
	invalidLang: "Veuillez fournir une lang valide",
	number: "Ce champ doit contenir des chiffres.",
	payment_method: "Mode de paiement invalide",
	bad_otp: "OTP incorrecte",
	pwd_confirm_failed: "Les mots de passe ne correspondent pas.",
	server_api_failed: "Service indisponible ! Veuillez réessayer plus tard.",
	email: "Ce champ doit contenir une adresse mail valide",
	client_user_account: "Aucun compte bancaire n'est associé à cet utilisateur.",
	phone: "Numéro de téléphone invalide",
	invalidType: "Veuillez fournir un type valide",
	date: "Veuillez fournir une date valide",
	invalidOtp: "Code OTP invalide"
};
var menu = {
	dashboard: "Tableau de bord",
	account: "Mes comptes",
	beneficiary: "Mes bénéficiaires",
	transfer: "Mes transferts",
	profile: "Mon profil"
};
const fr = {
	meta: meta,
	page: page,
	button: button,
	placeholder: placeholder,
	success: success,
	validation: validation,
	menu: menu
};

export { button, fr as default, menu, meta, page, placeholder, success, validation };
//# sourceMappingURL=fr2.mjs.map
