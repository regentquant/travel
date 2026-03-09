# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## AUTO Plan & Code

1. Before writing or editing any code, first output a detailed step-by-step plan (files to modify, specific changes, rationale)
2. Immediately execute the full plan without pausing for confirmation

## Project Overview

A standalone single-page travel guide for a 7-day road trip from Santa Clara, CA. Contains curated local activities (restaurants, hiking, beaches, museums, attractions, scenic drives, shopping) with drive times, ratings, prices, and tags.

## Architecture

- **`index.html`** — The main deliverable. A self-contained HTML file (no build step, no framework) with inline CSS and vanilla JavaScript. All data, styling, and interactivity live in this single file. Chinese UI with English location names preserved for searchability.
- **`travel-guide.jsx`** — The original React source (reference only, not used in production). The HTML file is a manual conversion of this component.

## Key Design Decisions

- **No build tools** — open `index.html` directly in a browser. No npm, no bundler.
- **Chinese fonts** — uses Google Fonts: `LXGW WenKai TC` (primary) with `Noto Sans SC` fallback. English headings use `Playfair Display`.
- **Location names** — always keep original English name + Chinese translation side by side, so users can search for the English name on maps.
- **Drive time filtering** — items use Chinese time units (分钟/小时). The filter logic parses these to categorize as close/mid/far.
- **Accordion UI** — one category open at a time, vanilla JS state management via `activeCategory` and `currentFilter` globals, re-rendered by calling `render()`.

## Development

No build or test commands. Edit `index.html` and refresh the browser.
