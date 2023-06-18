export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.4ded350e.js","app":"_app/immutable/entry/app.aed05f27.js","imports":["_app/immutable/entry/start.4ded350e.js","_app/immutable/chunks/index.6dba6488.js","_app/immutable/chunks/singletons.3e003f54.js","_app/immutable/entry/app.aed05f27.js","_app/immutable/chunks/index.6dba6488.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
