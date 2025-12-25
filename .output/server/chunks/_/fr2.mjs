var meta = {
	title: {
		login: "Se connecter",
		forgot_password: "Mot de passe oublier",
		update_password: "Mettre à jour le mot de passe",
		dashboard: "Tableau de bord"
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
		forgot_password: "Have you forgotten your password?"
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
	}
};
var button = {
	login: "Connexion",
	verify_code: "Vérifier le code",
	update_password: "Mettre à jour le mot de passe"
};
var placeholder = {
	pseudo: "Pseudo ou email",
	new_password: "Nouveau mot de passe",
	confirm_new_password: "Confirmer le nouveau mot de passe"
};
var success = {
	welcome: "Bienvenu à :bankName"
};
var validation = {
	required: "Ce champ est obligatoire.",
	min: "Ce champ est réquis et doit contenir plus de :value caractères.",
	invalidLang: "Veuillez fournir une lang valide",
	number: "Ce champ doit contenir des chiffres.",
	payment_method: "Mode de paiement invalide",
	bad_otp: "OTP incorrecte",
	pwd_confirm_failed: "Les mots de passe ne correspondent pas."
};
const fr = {
	meta: meta,
	page: page,
	button: button,
	placeholder: placeholder,
	success: success,
	validation: validation
};

export { button, fr as default, meta, page, placeholder, success, validation };
//# sourceMappingURL=fr2.mjs.map
