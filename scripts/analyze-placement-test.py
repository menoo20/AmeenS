import pandas as pd
import json

# Read both Excel files
branch1_file = r'F:\work\My website v2\abo-ameen-fullstack\public\assets\excel\Placement Test for Black Gold Institute.xlsx'
branch2_file = r'F:\work\My website v2\abo-ameen-fullstack\public\assets\excel\Placement Test for Black Gold Institute Branch 2.xlsx'

def analyze_branch(file_path, branch_name):
    try:
        # Try to read the Excel file
        df = pd.read_excel(file_path)
        
        print(f"\n{'='*60}")
        print(f"Analysis for {branch_name}")
        print(f"{'='*60}")
        
        # Display first few rows to understand structure
        print("\nFirst 5 rows:")
        print(df.head())
        
        print("\nColumn names:")
        print(df.columns.tolist())
        
        # Try to find the marks column (common names)
        possible_mark_columns = ['Mark', 'Marks', 'Score', 'Total', 'Final Mark', 'Grade', 'Result']
        mark_column = None
        
        for col in df.columns:
            col_str = str(col).strip()
            if any(mark_name.lower() in col_str.lower() for mark_name in possible_mark_columns):
                mark_column = col
                break
        
        if mark_column:
            print(f"\nFound marks column: '{mark_column}'")
            
            # Clean the data - convert to numeric, dropping non-numeric values
            marks = pd.to_numeric(df[mark_column], errors='coerce').dropna()
            
            total_students = len(marks)
            cannot_read = len(marks[marks < 35])
            level1_ready = len(marks[marks >= 35])
            
            print(f"\nTotal Students: {total_students}")
            print(f"Cannot Read/Write (< 35): {cannot_read} ({(cannot_read/total_students*100):.1f}%)")
            print(f"Ready for Level 1 (>= 35): {level1_ready} ({(level1_ready/total_students*100):.1f}%)")
            
            print(f"\nMark Distribution:")
            print(f"  Minimum: {marks.min()}")
            print(f"  Maximum: {marks.max()}")
            print(f"  Average: {marks.mean():.2f}")
            print(f"  Median: {marks.median()}")
            
            return {
                'branch': branch_name,
                'total': int(total_students),
                'cannot_read': int(cannot_read),
                'level1_ready': int(level1_ready)
            }
        else:
            print(f"\nCould not automatically identify marks column.")
            print("Please specify which column contains the marks.")
            return None
            
    except Exception as e:
        print(f"\nError analyzing {branch_name}: {str(e)}")
        return None

# Analyze both branches
results = {}

branch1_data = analyze_branch(branch1_file, "BGTI Branch 1")
if branch1_data:
    results['branch1'] = branch1_data

branch2_data = analyze_branch(branch2_file, "BGTI Branch 2")
if branch2_data:
    results['branch2'] = branch2_data

# Save results to JSON file
if results:
    output_file = r'F:\work\My website v2\abo-ameen-fullstack\scripts\placement-test-results.json'
    with open(output_file, 'w') as f:
        json.dump(results, f, indent=2)
    
    print(f"\n{'='*60}")
    print("Results saved to: placement-test-results.json")
    print(f"{'='*60}")
    
    # Print combined stats
    if 'branch1' in results and 'branch2' in results:
        total = results['branch1']['total'] + results['branch2']['total']
        cannot_read = results['branch1']['cannot_read'] + results['branch2']['cannot_read']
        level1_ready = results['branch1']['level1_ready'] + results['branch2']['level1_ready']
        
        print(f"\nCOMBINED STATISTICS:")
        print(f"Total Students: {total}")
        print(f"Cannot Read/Write: {cannot_read} ({(cannot_read/total*100):.1f}%)")
        print(f"Ready for Level 1: {level1_ready} ({(level1_ready/total*100):.1f}%)")
