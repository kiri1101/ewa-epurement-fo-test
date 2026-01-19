CREATE TABLE `bank_accounts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text NOT NULL,
	`user_id` integer NOT NULL,
	`acc_ref` text NOT NULL,
	`i_ban` numeric NOT NULL,
	`bank` text NOT NULL,
	`acc_type` text NOT NULL,
	`agency` text NOT NULL,
	`balance` numeric NOT NULL,
	`client_type` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `bank_accounts_uuid_unique` ON `bank_accounts` (`uuid`);--> statement-breakpoint
CREATE TABLE `beneficiaries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text NOT NULL,
	`user_id` integer NOT NULL,
	`code` text NOT NULL,
	`type` text NOT NULL,
	`full_name` text NOT NULL,
	`country` text NOT NULL,
	`status` text NOT NULL,
	`bank_name` text NOT NULL,
	`swift_bic` text NOT NULL,
	`iban` text NOT NULL,
	`created_at` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `beneficiaries_uuid_unique` ON `beneficiaries` (`uuid`);--> statement-breakpoint
CREATE TABLE `beneficiary_files` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text NOT NULL,
	`file_id` text NOT NULL,
	`file_category` text NOT NULL,
	`description` text NOT NULL,
	`file_label` text NOT NULL,
	`is_required` integer NOT NULL,
	`type` text NOT NULL,
	`ref` text,
	`url` text,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `beneficiary_files_uuid_unique` ON `beneficiary_files` (`uuid`);--> statement-breakpoint
CREATE TABLE `collaborators` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text NOT NULL,
	`user_id` integer NOT NULL,
	`acc_id` integer NOT NULL,
	`username` text NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text NOT NULL,
	`phone_code` text NOT NULL,
	`phone_number` text NOT NULL,
	`roles` text NOT NULL,
	`is_active` integer NOT NULL,
	`created_at` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE cascade ON DELETE cascade,
	FOREIGN KEY (`acc_id`) REFERENCES `bank_accounts`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `collaborators_uuid_unique` ON `collaborators` (`uuid`);--> statement-breakpoint
CREATE TABLE `countries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text NOT NULL,
	`code` text NOT NULL,
	`name` text NOT NULL,
	`currency` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `countries_uuid_unique` ON `countries` (`uuid`);--> statement-breakpoint
CREATE UNIQUE INDEX `countries_code_unique` ON `countries` (`code`);--> statement-breakpoint
CREATE TABLE `currencies` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text NOT NULL,
	`code` text NOT NULL,
	`label_en` text NOT NULL,
	`label_fr` text NOT NULL,
	`symbol` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `currencies_uuid_unique` ON `currencies` (`uuid`);--> statement-breakpoint
CREATE TABLE `roles` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text NOT NULL,
	`user_id` integer NOT NULL,
	`code` text NOT NULL,
	`name` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `roles_uuid_unique` ON `roles` (`uuid`);--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text NOT NULL,
	`user_id` integer NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text,
	`expire_at` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `sessions_uuid_unique` ON `sessions` (`uuid`);--> statement-breakpoint
CREATE TABLE `transfer_attachments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text NOT NULL,
	`type_id` integer NOT NULL,
	`name` text NOT NULL,
	`code` text NOT NULL,
	`category` text NOT NULL,
	`is_required` integer NOT NULL,
	FOREIGN KEY (`type_id`) REFERENCES `transfer_types`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `transfer_attachments_uuid_unique` ON `transfer_attachments` (`uuid`);--> statement-breakpoint
CREATE TABLE `transfer_types` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text NOT NULL,
	`code` text NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `transfer_types_uuid_unique` ON `transfer_types` (`uuid`);--> statement-breakpoint
CREATE TABLE `transfers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text NOT NULL,
	`user_id` integer NOT NULL,
	`code` text NOT NULL,
	`beneficiary_name` text NOT NULL,
	`client_name` text NOT NULL,
	`status` text NOT NULL,
	`user_code` text NOT NULL,
	`account_code` text NOT NULL,
	`account_number` text NOT NULL,
	`account_type` text NOT NULL,
	`amount` text NOT NULL,
	`balance` text NOT NULL,
	`bank_agency` text NOT NULL,
	`is_engaged` integer NOT NULL,
	`otp_code` text,
	`otp_live_time` text,
	`created_at` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `transfers_uuid_unique` ON `transfers` (`uuid`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text NOT NULL,
	`username` text NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text NOT NULL,
	`has_complete_kyc` integer NOT NULL,
	`phone_code` text NOT NULL,
	`phone_number` text NOT NULL,
	`status` integer NOT NULL,
	`roles` text NOT NULL,
	`is_first_login` integer NOT NULL,
	`otp` text,
	`bearer_token` text NOT NULL,
	`refresh_token` text NOT NULL,
	`token_life` numeric NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_uuid_unique` ON `users` (`uuid`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_phone_number_unique` ON `users` (`phone_number`);