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
	`otp` integer,
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