dev:
	pnpm run dev

prod:
	pnpm run build
	pnpm run preview

reinstall-deps: remove-deps install-deps

install-deps:
	pnpm install

remove-deps:
	rm -rf node_modules
