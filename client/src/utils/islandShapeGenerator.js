// src/utils/islandShapeGenerator.js
// ─────────────────────────────────────────────────────────────────────────────
// Generates THREE.Shape outlines for stylized illustrated island terrain layers.
// Replaces satelliteTextureGenerator.js — no canvas textures needed.

import * as THREE from 'three';

const shapeCache = new Map();

/**
 * Generate a smooth organic THREE.Shape from control points.
 * @param {Array<[number, number]>} points - Normalized control points (-1 to 1)
 * @param {number} radius - Base radius multiplier
 * @param {number} noiseAmount - Organic coastline noise
 * @returns {THREE.Shape}
 */
function generateShape(points, radius = 1.0, noiseAmount = 0.06) {
  const shape = new THREE.Shape();
  const len = points.length;

  // Add subtle noise to each point for organic feel
  const noisyPoints = points.map(([x, y], i) => {
    const seed = i * 127.1 + radius * 311.7;
    const nx = x + Math.sin(seed) * noiseAmount;
    const ny = y + Math.cos(seed * 1.3) * noiseAmount;
    return [nx * radius, ny * radius];
  });

  // Start at first point
  shape.moveTo(noisyPoints[0][0], noisyPoints[0][1]);

  // Create smooth Bezier curves through all points
  for (let i = 0; i < len; i++) {
    const curr = noisyPoints[i];
    const next = noisyPoints[(i + 1) % len];
    const nextNext = noisyPoints[(i + 2) % len];

    // Control points for smooth cubic Bezier
    const cp1x = curr[0] + (next[0] - noisyPoints[(i - 1 + len) % len][0]) * 0.25;
    const cp1y = curr[1] + (next[1] - noisyPoints[(i - 1 + len) % len][1]) * 0.25;
    const cp2x = next[0] - (nextNext[0] - curr[0]) * 0.25;
    const cp2y = next[1] - (nextNext[1] - curr[1]) * 0.25;

    shape.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, next[0], next[1]);
  }

  shape.closePath();
  return shape;
}

/**
 * Generate concentric island terrain layers.
 * Returns array of { shape, color, height } from outermost to innermost.
 */
export function getIslandLayers(destId, shapePoints, terrainColors, baseScale = 1.0) {
  const cacheKey = `${destId}-${baseScale}`;
  if (shapeCache.has(cacheKey)) return shapeCache.get(cacheKey);

  const layers = [];
  const numLayers = terrainColors.length;
  const baseRadius = baseScale * 0.75;

  for (let i = 0; i < numLayers; i++) {
    const t = i / (numLayers - 1 || 1); // 0 = outermost, 1 = innermost
    const layerRadius = baseRadius * (1.0 - t * 0.35); // Each inner layer is ~35% smaller
    const height = 0.04 + t * 0.22; // Height increases toward center
    const noiseAmount = 0.08 * (1 - t * 0.5); // Less noise on inner layers

    const shape = generateShape(shapePoints, layerRadius, noiseAmount);

    layers.push({
      shape,
      color: terrainColors[i],
      height,
      yOffset: i * 0.005, // Stack layers slightly above each other
    });
  }

  shapeCache.set(cacheKey, layers);
  return layers;
}

/**
 * Generate a simple single-layer shape for small/scatter islands.
 */
export function getSmallIslandShape(scale = 0.1) {
  // Simple slightly irregular circle
  const pts = [];
  const segments = 7;
  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const r = scale * (0.8 + Math.sin(i * 3.7) * 0.2);
    pts.push([Math.cos(angle) * r, Math.sin(angle) * r]);
  }
  return generateShape(pts, 1.0, 0.01);
}

/**
 * Generate a volcanic island shape (for Barren Island)
 * — cone-like with steeper terrain layers
 */
export function getVolcanicLayers(shapePoints, baseScale = 0.6) {
  const colors = ['#D7E6E8', '#8BB5A0', '#5A8C6A', '#3D6B4A'];
  const layers = [];
  const baseRadius = baseScale * 0.75;

  for (let i = 0; i < colors.length; i++) {
    const t = i / (colors.length - 1);
    const layerRadius = baseRadius * (1.0 - t * 0.45);
    const height = 0.06 + t * 0.35; // Steeper volcano
    const shape = generateShape(shapePoints, layerRadius, 0.05);

    layers.push({
      shape,
      color: colors[i],
      height,
      yOffset: i * 0.005,
    });
  }

  return layers;
}
