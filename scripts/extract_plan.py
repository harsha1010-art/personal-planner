"""Turn the study-tracker workbook into src/data/plan.json. Re-run if the workbook changes.

Usage: python scripts/extract_plan.py path/to/UPSC_CSE_2027_Daywise_Study_Tracker.xlsx
"""
import json
import os
import sys

import openpyxl

SHEETS = {
    'sources': 'Source Index',
    'importance': 'Importance Index',
    'howToStudy': 'How to Study',
    'routine': 'Weekly Routine',
    'syllabus': 'Syllabus Checklist',
    'sociology': 'Sociology Plan',
    'languages': 'Languages & Essay',
}


def rows(ws):
    all_rows = list(ws.iter_rows(values_only=True))
    head = [str(h) for h in all_rows[0]]
    return [dict(zip(head, [('' if c is None else str(c)) for c in r])) for r in all_rows[1:] if any(r)]


wb = openpyxl.load_workbook(sys.argv[1])
days = []
for r in wb['Daily Plan'].iter_rows(min_row=2, values_only=True):
    if not r[0]:
        continue
    optional, _, focus = (r[7] or '').partition(' | Sociology focus: ')
    days.append({
        'date': r[0].strftime('%Y-%m-%d'),
        'weekday': r[1],
        'phase': r[2],
        'topic': r[3],
        'read': r[4],
        'output': r[5],
        'routine': r[6],
        'optional': optional,
        'sociologyFocus': focus,
        'currentAffairs': r[8],
    })

weeks = [{'week': r[0], 'from': r[1].strftime('%Y-%m-%d'), 'to': r[2].strftime('%Y-%m-%d')}
         for r in wb['Weekly Review'].iter_rows(min_row=2, values_only=True) if r[0]]
meta = [{'label': r[0], 'text': r[1]} for r in wb['Start Here'].iter_rows(min_row=2, values_only=True) if r[0]]

out = {'days': days, 'weeks': weeks, 'meta': meta}
for key, sheet in SHEETS.items():
    out[key] = rows(wb[sheet])

path = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'plan.json')
os.makedirs(os.path.dirname(path), exist_ok=True)
with open(path, 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False, indent=1)
print(len(days), 'days;', len(weeks), 'weeks')
