var meta = {
	title: {
		login: "Sign In",
		forgot_password: "Forgot Password",
		update_password: "Update Password",
		dashboard: "Dashboard",
		account: "My accounts",
		beneficiary: {
			"new": "New beneficiary",
			show: "My beneficiaries",
			edit: "Edit beneficiary"
		},
		transfer: {
			show: "My transfers",
			"new": "New transfer",
			view: "My transfer"
		},
		profile: {
			infos: "My profile",
			users: "My users"
		},
		domiciliation: {
			show: "My domiciliations",
			"new": "New domiciliation",
			view: "Domiciliation details"
		},
		doc_viewer: {
			pdf: "Document visualization"
		}
	}
};
var page = {
	login: {
		form_title: "Sign In",
		intro_msg: {
			part1: "Submit your",
			part2: "transfer request online",
			part3: "right now!"
		},
		forgot_password: "Have you forgotten your password?",
		security: "Secured platform"
	},
	forgot_password: {
		form_title: "2Fa Verification",
		intro_msg: {
			part1: "A verification code has been sent to your email",
			part2: "Enter it below"
		},
		resend_code: "Resend OTP code:",
		resend_code_link: "Code not received?",
		resend_code_button: "Resend code"
	},
	update_password: {
		form_title: "Update your password"
	},
	dashboard: {
		welcome: "Welcome",
		hero_title: "Manage your international transfers with ease",
		total: "Total",
		pending: "Pending",
		closed: "Closed",
		action: "Action",
		required: "Required",
		request: "Requests",
		transfer_history: "Transfer history"
	},
	account: {
		account: "Account",
		agency: "Agency",
		advisor: "Advisor",
		available_balance: "Available balance",
		title1: "Here is the list of bank accounts linked to your account.",
		title2: "Manage your debit accounts",
		client: "Client"
	},
	beneficiary: {
		title: "Manage who you send money to",
		status: {
			active: "Active",
			block: "Block",
			archive: "Archive"
		},
		card: {
			country: "Country",
			bank: "Bank",
			iban: "IBAN",
			status: "Status",
			edit: "Edit",
			"delete": "Delete"
		},
		"new": "Add a new beneficiary",
		edit: "Edit a beneficiary",
		id_code: "Identification code",
		name: "Full name",
		phone: "Phone number",
		email: "Email",
		address1: "Line 1",
		address2: "Line 2",
		bank_name: "Bank name",
		city: "City",
		town: "State / Region",
		postal: "Postal code",
		nationality: "Nationality",
		country: "Country",
		type: "Type of beneficiary",
		iban: "IBAN",
		swift: "SWIFT",
		docs: "Documents to submit",
		upload: "Uploaded",
		no_file: "No files have been assigned yet.",
		required: "Mandatory",
		"delete": {
			modal_title: "Confirmation",
			modal_message: "Are you sure you wish to delete this beneficiary?",
			confirm: "Proceed",
			cancel: "Cancel"
		}
	},
	domiciliation: {
		title: "List of domiciliations",
		date: "Date / Time",
		id: "Domiciliation ID",
		beneficiary: "Beneficiary",
		nature: "Nature",
		benefAmount: "Beneficiary Amount",
		history: "Domiciliations history",
		balance: "Balance",
		action: "Action",
		"new": {
			title1: "Domiciliation management",
			title2: "Create a new domiciliation.",
			infos: "General Information & Parties",
			nature_imp: "Nature of Importation",
			import_bien: "Importation of Goods",
			import_service: "Importation of Services",
			infos_importateur: "Importer Information (You)",
			raison_sociale: "Company Name",
			reg_commerce: "Trade Register",
			addresse: "Address",
			profession: "Profession",
			imma_stat: "Statistical Registration",
			infos_fournisseur: "Supplier Information",
			select_beneficiary: "Select a supplier",
			full_name: "Name / Company Name",
			country_origin: "Country of Origin",
			trans_details: "Transaction Details",
			reference: "Reference",
			payment_due_date: "Payment Due Date",
			commercial_label: "Commercial Description",
			chapter: "Chapter",
			qty: "Quantity (Net Weight)",
			custom_label: "Customs Nomenclature",
			declare_import: "Import declaration",
			service_desc: "Service description",
			onboarding_port: "Boarding Office",
			fob_value: "FOB Value",
			caf_value: "CAF Value",
			amount: "Amount",
			currency: "Currency",
			foreign_amount: "Foreign Amount",
			converted_amount: "CFA Counter-value (Estimated)",
			documents: "Supporting Documents",
			no_file: "No files have been assigned yet.",
			confirmation: "Confirmation",
			confirmation_message: "Are you sure you want to create this domiciliation?",
			table: {
				nature: "Imp. Nature",
				status: "Status",
				declare_import: "Imp. Declaration"
			}
		},
		edit: {
			title1: "View your domiciliation",
			title2: "View your domiciliation information as you see fit.",
			party_involved: "Interested parties",
			"import": "Importer",
			supplier: "Supplier",
			operation_details: "Operation details",
			designation: "Commercial Description",
			qty: "Quantity",
			office: "Boarding Office",
			reference: "Invoice Reference",
			fob_value: "FOB Value",
			caf_value: "CAF Value",
			payment_deadline: "Payment Due Date",
			custom_infos: "Customs Nomenclature",
			amount: "Amount in foreign currency",
			currency: "Currency",
			chapter: "Chapter",
			description: "Service description",
			documents: "Supporting Documents",
			created_at: "Date added"
		}
	},
	transfer: {
		title: "Find in the table below a list of transfers requests",
		date: "Date / Time",
		id: "Transfer ID",
		beneficiary: "Beneficiary",
		nature: "Nature",
		benefAmount: "Beneficiary Amount",
		balance: "Balance",
		action: "Action",
		history: "Transfers history",
		"new": {
			title1: "Transfers management",
			title2: "Create a new request for transfer.",
			type: "Transfer type",
			motive: "Transfer motive",
			amount: "Amount",
			total_amount: "Total amount",
			currency: "Currency",
			rate: "Exchange rate",
			account_num: "Account",
			agency: "Agency",
			target_date: "Target date",
			beneficiary: "Beneficiary",
			domiciliation: "Domiciliation",
			execution_date: "Desired execution date",
			shared_fee: "Shared fee",
			bank_fee: "Bank charges",
			transfer_type: "Type of transfer",
			description: "Description",
			iban: "IBAN",
			dom_options: {
				create: {
					title: "Create",
					description: "Create a new domiciliation"
				},
				select: {
					title: "Select",
					description: "Select an existing domiciliation"
				},
				done: {
					title: "Done",
					description: "Already created a domiciliation"
				}
			},
			dom_number: "Domiciliation number",
			declare_num: "Demand application number",
			remittance_info: "Remittance information",
			handle_cost: "Covers the cost",
			cover_cost: {
				our: "The client handles all transfer cost",
				ben: "The beneficiary handles all transfer cost",
				sha: "Both parties share transfer cost"
			},
			doc_undertake: "I undertake to provide all documents before the end of the regulatory deadlines.",
			doc_undertake_note: "By checking this box, you acknowledge that all required documents must be submitted within the regulatory deadlines to avoid penalties or rejection of the transfer.",
			doc_submit: "Documents to submit",
			uploaded: "uploaded",
			no_file: "No files have been assigned yet.",
			ready: "Your request is ready to be submitted",
			review: "Please review all the information below before confirming the submission.",
			infos: "Transfer information",
			debit_account: "Debit account",
			submit_confirm: "By submitting this request, you confirm that all the information provided is accurate and complete."
		},
		details: {
			title1: "View your request",
			title2: "View and update your transfer information.",
			request_info: "Request information",
			attachments: "Attachments",
			type: "Request type",
			code: "Request code",
			beneficiary: "Beneficiary",
			target_date: "Target date",
			amount: "Amount",
			currency: "Currency",
			account_num: "Account number",
			cost_support: "Cost support",
			description: "Description",
			bo_comment: "Back office comment",
			clearance_comment: "Clearance comment"
		},
		send: {
			title1: "Initiate a cash transfer",
			title2: "Move forward with your transfer request once you feel comfortable.",
			otp_message: "An OTP code has been sent to you via mail. Please enter the code to proceed.",
			file: "Engagement file"
		},
		engagement: {
			title: "Commitment accepted.",
			message_01: "You can now submit your transfer request. Please you download your engagement letter foun via the link",
			message_02: "and later upload all necessary documents before the regulatory deadlines."
		}
	},
	required: "Mandatory",
	profile: {
		menu: {
			infos: "Informations",
			users: "My users"
		},
		infos: {
			title: "Personal informations",
			id_code: "Identification code",
			first_name: "First name",
			last_name: "Last name",
			phone: "Phone number",
			email: "Email",
			support: "Support",
			agency: "Agency",
			address1: "Address 1",
			address2: "Address 2",
			city: "City",
			state: "State",
			postal: "Postal code",
			nationality: "Nationality",
			country: "Country",
			kyc_status: "Kyc status",
			information: "To modify your personal information, contact the support service or your agency."
		},
		collaborator: {
			title1: "Users management",
			title2: "Manage system access and user roles across all bank accounts.",
			full_name: "Full name",
			role: "Role",
			status: "Status",
			created_at: "Created at",
			action: "Action"
		},
		"new": {
			title1: "Add a new collaborator",
			title2: "Create a new collaborator to manage your bank assets.",
			first_name: "First name",
			last_name: "Last name",
			pseudo: "Pseudo",
			mailing_address: "Email",
			phone: "Phone",
			accounts: "Affiliated accounts",
			no_accounts: "No bank accounts have been assigned yet.",
			role: {
				title: "Choose a role associated to this account",
				validation: "Validation",
				saisie: "Saisie"
			}
		},
		status: {
			active: "Active",
			block: "Block",
			archive: "Archive"
		}
	}
};
var button = {
	login: "Login",
	verify_code: "Verify Code",
	update_password: "Update Password",
	logout: "Log Out",
	create_benef: "Create a beneficiary",
	cancel: "Cancel",
	submit: "Submit",
	next: "Next",
	new_domiciliation: "New domiciliation",
	new_transfer: "New transfer",
	send_request: "Save request",
	add_user: "Add a user",
	add_account: "Add an account",
	create_user: "Create a user",
	action: "Action",
	engagement_letter: "Get engagement letter",
	save: "Save",
	back: "Back",
	new_beneficiary: "New beneficiary"
};
var placeholder = {
	pseudo: "Pseudo or email",
	new_password: "New password",
	confirm_new_password: "Confirm new password",
	find_transfer: "Find a transfer",
	find_beneficiary: "Find a beneficiary",
	find_domiciliation: "Find a domiciliation",
	select_account: "Choose an account",
	select_beneficiary: "Choose a beneficiary",
	select_domiciliation: "Choose a domiciliation",
	upload: "Drop your file here..."
};
var success = {
	welcome: "Welcome to :bankName",
	collaborator_created: "New collaborator created",
	file_uploaded: "File uploaded successfully",
	domiciliation_created: "Domiciliation created successfully"
};
var validation = {
	required: "This field is required",
	min: "This field is required & must be greater than :value characters",
	max: "This field is required & must be less than :value characters",
	invalidLang: "Please provide a valid locale",
	number: "This field must be numbers",
	payment_method: "Invalid payment method",
	bad_otp: "Invalid OTP code",
	pwd_confirm_failed: "Passwords do not match",
	server_api_failed: "Service unavailable! Try again later",
	email: "This field must be a valid email address",
	client_user_account: "No bank accounts assigned to this user",
	phone: "Invalid phone number",
	invalidType: "Please provide a valid type",
	date: "Invalid date",
	invalidOtp: "Invalid OTP code",
	invalidId: "Please provide a valid ID",
	empty_form: "Please fill in all mandatory fields of the form",
	upload_failed: "File upload failed! Try again later",
	engagement_file: "Please provide an engagement letter",
	invalid_key: "The key provided must be a string",
	fill_all_required_fields: "Please fill all required fields",
	files_required: "Please upload all required files"
};
var error = {
	unknown: "An unexpected error occurred. Please try again."
};
var menu = {
	dashboard: "Dashboard",
	account: "My accounts",
	beneficiary: {
		"new": "New beneficiary",
		show: "My beneficiaries",
		edit: "Edit beneficiary"
	},
	transfer: {
		show: "My transfers",
		"new": "New transfer",
		view: "Transfer details"
	},
	domiciliation: {
		show: "My domiciliations",
		"new": "New domiciliation",
		view: "View domiciliation"
	},
	profile: "My profile",
	doc_viewer: {
		pdf: "Document visualization"
	}
};
var table = {
	date_time: "Date / Time",
	transaction_id: "Transaction ID",
	beneficiary: "Beneficiary",
	type: "Type",
	amount: "Amount",
	status: "Status",
	action: "Action",
	empty: "No data found"
};
const en = {
	meta: meta,
	page: page,
	button: button,
	placeholder: placeholder,
	success: success,
	validation: validation,
	error: error,
	menu: menu,
	table: table
};

export { button, en as default, error, menu, meta, page, placeholder, success, table, validation };
//# sourceMappingURL=en.mjs.map
