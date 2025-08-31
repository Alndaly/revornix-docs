'use client';

import React, { useCallback } from 'react';
import '@xyflow/react/dist/style.css';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import {
	Background,
	useNodesState,
	useEdgesState,
	addEdge,
} from '@xyflow/react';
import { cn } from '@/lib/utils';

const ReactFlow = dynamic(
	() => import('@xyflow/react').then((mod) => mod.ReactFlow),
	{
		ssr: false,
	}
);

const HeroFlow = ({ className }: { className?: string }) => {
	const { theme } = useTheme();
	const initialNodes = [
		{
			id:  'way-1',
			sourcePosition: 'right',
			type: 'input',
			data: { label: 'chrome extension' },
			position: { x: 0, y: 0 },
		},
		{
			id: 'way-2',
			sourcePosition: 'right',
            type: 'input',
			data: { label: 'npm package' },
			position: { x: 0, y: 80 },
		},
		{
			id: 'way-3',
			sourcePosition: 'right',
            type: 'input',
			data: { label: 'pypi package' },
			position: { x: 0, y: 160 },
		},
        {
            id: 'way-4',
            sourcePosition: 'right',
            type: 'input',
			data: { label: 'web app' },
			position: { x: 0, y: 240 },
        },
		{
			id: 'horizontal-4',
			sourcePosition: 'right',
			targetPosition: 'left',
			data: { label: 'Node 4' },
			position: { x: 500, y: 0 },
		},
		{
			id: 'horizontal-5',
			sourcePosition: 'top',
			targetPosition: 'bottom',
			data: { label: 'Node 5' },
			position: { x: 500, y: 100 },
		},
		{
			id: 'horizontal-6',
			sourcePosition: 'bottom',
			targetPosition: 'top',
			data: { label: 'Node 6' },
			position: { x: 500, y: 230 },
		},
		{
			id: 'horizontal-7',
			sourcePosition: 'right',
			targetPosition: 'left',
			data: { label: 'Node 7' },
			position: { x: 750, y: 50 },
		},
		{
			id: 'horizontal-8',
			sourcePosition: 'right',
			targetPosition: 'left',
			data: { label: 'Node 8' },
			position: { x: 750, y: 300 },
		},
	];

	const initialEdges = [
		{
			id: 'horizontal-e1-2',
			source: 'horizontal-1',
			type: 'smoothstep',
			target: 'horizontal-2',
			animated: true,
		},
		{
			id: 'horizontal-e1-3',
			source: 'horizontal-1',
			type: 'smoothstep',
			target: 'horizontal-3',
			animated: true,
		},
		{
			id: 'horizontal-e1-4',
			source: 'horizontal-2',
			type: 'smoothstep',
			target: 'horizontal-4',
			label: 'edge label',
		},
		{
			id: 'horizontal-e3-5',
			source: 'horizontal-3',
			type: 'smoothstep',
			target: 'horizontal-5',
			animated: true,
		},
		{
			id: 'horizontal-e3-6',
			source: 'horizontal-3',
			type: 'smoothstep',
			target: 'horizontal-6',
			animated: true,
		},
		{
			id: 'horizontal-e5-7',
			source: 'horizontal-5',
			type: 'smoothstep',
			target: 'horizontal-7',
			animated: true,
		},
		{
			id: 'horizontal-e6-8',
			source: 'horizontal-6',
			type: 'smoothstep',
			target: 'horizontal-8',
			animated: true,
		},
	];

	// @ts-ignore
	const [nodes, _, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const onConnect = useCallback(
		(params) => setEdges((els) => addEdge(params, els)),
		[]
	);

	return (
		<>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				fitView
				attributionPosition='bottom-left'
				className={cn(
					'min-h-[80vh] border border-border rounded',
					className
				)}
				zoomOnScroll={false}
				preventScrolling={false}
				// @ts-ignore
				colorMode={theme}>
				<Background />
			</ReactFlow>
		</>
	);
};

export default HeroFlow;
