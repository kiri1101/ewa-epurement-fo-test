var meta = {
	title: {
		login: "Sign In",
		forgot_password: "Forgot Password",
		update_password: "Update Password",
		dashboard: "Dashboard"
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
		forgot_password: "Have you forgotten your password?"
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
	}
};
var button = {
	login: "Login",
	verify_code: "Verify Code",
	update_password: "Update Password"
};
var placeholder = {
	pseudo: "Pseudo or email",
	new_password: "New password",
	confirm_new_password: "Confirm new password"
};
var success = {
	welcome: "Welcome to :bankName"
};
var validation = {
	required: "This field is required",
	min: "This field is required & must be greater than :value characters",
	invalidLang: "Please provide a valid locale",
	number: "This field must be numbers",
	payment_method: "Invalid payment method",
	bad_otp: "Invalid OTP code",
	pwd_confirm_failed: "Passwords do not match"
};
const en = {
	meta: meta,
	page: page,
	button: button,
	placeholder: placeholder,
	success: success,
	validation: validation
};

export { button, en as default, meta, page, placeholder, success, validation };
//# sourceMappingURL=en2.mjs.map
