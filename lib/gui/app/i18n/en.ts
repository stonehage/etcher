const translation = {
	translation: {
		continue: 'Continue',
		ok: 'OK',
		cancel: 'Cancel',
		skip: 'Skip',
		sure: "Yes, I'm sure",
		warning: 'WARNING! ',
		attention: 'Attention',
		failed: 'Failed',
		completed: 'Completed',
		yesContinue: 'Yes, continue',
		reallyExit: 'Are you sure you want to close Etcher?',
		yesExit: 'Yes, quit',
		progress: {
			starting: 'Starting...',
			decompressing: 'Decompressing...',
			flashing: 'Flashing...',
			finishing: 'Finishing...',
			verifying: 'Verifying...',
			failing: 'Failed',
		},
		message: {
			sizeNotRecommended: 'Not recommended',
			tooSmall: 'Too small',
			locked: 'Locked',
			system: 'System drive',
			containsImage: 'Source drive',
			largeDrive: 'Large drive',
			sourceLarger: 'The selected source is {{byte}} larger than this drive.',
			flashSucceed_one: 'Successful target',
			flashSucceed_other: 'Successful targets',
			flashFail_one: 'Failed target',
			flashFail_other: 'Failed targets',
			to: 'to ',
			andFail: 'and failed to be flashed to ',
			target_one: ' target',
			target_other: ' targets',
			succeedTo: 'was successfully flashed',
			exitWhileFlashing:
				'You are currently flashing a drive. Closing Etcher may leave your drive in an unusable state.',
			looksLikeWindowsImage:
				'It looks like you are trying to burn a Windows image.\n\nUnlike other images, Windows images require special processing to be made bootable. We suggest you use a tool specially designed for this purpose, such as <a href="https://rufus.akeo.ie">Rufus</a> (Windows), <a href="https://github.com/slacka/WoeUSB">WoeUSB</a> (Linux), or Boot Camp Assistant (macOS).',
			missingPartitionTable:
				'It looks like this is not a bootable image.\n\nThe image does not appear to contain a partition table, and might not be recognized or bootable by your device.',
			driveMissingPartitionTable:
				'It looks like this is not a bootable drive.\nThe drive does not appear to contain a partition table,\nand might not be recognized or bootable by your device.',
			largeDriveSize:
				"This is a large drive! Make sure it doesn't contain files that you want to keep.",
			systemDrive:
				'Selecting your system drive is dangerous and will erase your drive!',
			sourceDrive: 'Contains the image you chose to flash',
			noSpace:
				'Not enough space on the drive. Please insert larger one and try again.',
			genericFlashError:
				'Something went wrong. If it is a compressed image, please check that the archive is not corrupted.',
			validation:
				'The write has been completed successfully but Etcher detected potential corruption issues when reading the image back from the drive. \n\nPlease consider writing the image to a different drive.',
			openError:
				'Something went wrong while opening {{source}}.\n\nError: {{error}}',
			flashError: 'Something went wrong while writing {{image}} to {{target}}.',
			unplug:
				"Looks like Etcher lost access to the drive. Did it get unplugged accidentally?\n\nSometimes this error is caused by faulty readers that don't provide stable access to the drive.",
			cannotWrite:
				'Looks like Etcher is not able to write to this location of the drive. This error is usually caused by a faulty drive, reader, or port. \n\nPlease try again with another drive, reader, or port.',
			childWriterDied:
				'The writer process ended unexpectedly. Please try again, and contact the Etcher team if the problem persists.',
			badProtocol: 'Only http:// and https:// URLs are supported.',
		},
		target: {
			selectTarget: 'Select target',
			plugTarget: 'Plug a target drive',
			targets: 'Targets',
			change: 'Change',
		},
		source: {
			useSourceURL: 'Use Image URL',
			auth: 'Authentication',
			username: 'Enter username',
			password: 'Enter password',
			unsupportedProtocol: 'Unsupported protocol',
			windowsImage: 'Possible Windows image detected',
			partitionTable: 'Missing partition table',
			errorOpen: 'Error opening source',
			fromFile: 'Flash from file',
			fromURL: 'Flash from URL',
			clone: 'Clone drive',
			image: 'Image',
			name: 'Name: ',
			path: 'Path: ',
			selectSource: 'Select source',
			plugSource: 'Plug a source drive',
			osImages: 'OS Images',
			allFiles: 'All',
			enterValidURL: 'Enter a valid URL',
		},
		drives: {
			name: 'Name',
			size: 'Size',
			location: 'Location',
			find: '{{length}} found',
			select: 'Select {{select}}',
			showHidden: 'Show {{num}} hidden',
			systemDriveDanger:
				'Selecting your system drive is dangerous and will erase your drive!',
			openInBrowser: '`Etcher will open {{link}} in your browser`',
			changeTarget: 'Change target',
			largeDriveWarning: 'You are about to erase an unusually large drive',
			largeDriveWarningMsg:
				'Are you sure the selected drive is not a storage drive?',
			systemDriveWarning: "You are about to erase your computer's drives",
			systemDriveWarningMsg:
				'Are you sure you want to flash your system drive?',
		},
		flash: {
			another: 'Flash another',
			target: 'Target',
			location: 'Location',
			error: 'Error',
			flash: 'Flash',
			flashNow: 'Flash!',
			skip: 'Validation has been skipped',
			moreInfo: 'more info',
			speedTip:
				'The speed is calculated by dividing the image size by the flashing time.\nDisk images with ext partitions flash faster as we are able to skip unused parts.',
			speed: 'Effective speed: ',
			failedTarget: 'Failed targets',
			failedRetry: 'Retry failed targets',
		},
		settings: {
			errorReporting:
				'Anonymously report errors and usage statistics to balena.io',
			autoUpdate: 'Auto-updates enabled',
			settings: 'Settings',
			systemInformation: 'System Information',
		},
		menu: {
			edit: 'Edit',
			view: 'View',
			devTool: 'Toggle Developer Tools',
			window: 'Window',
			help: 'Help',
			pro: 'Etcher Pro',
			website: 'Etcher Website',
			issue: 'Report an issue',
			about: 'About Etcher',
			hide: 'Hide Etcher',
			hideOthers: 'Hide Others',
			unhide: 'Unhide All',
			quit: 'Quit Etcher',
		},
	},
};

export default translation;
