-- 7.2절 ②: 접근 정책(RLS) — 연습용으로 누구나 조회·추가·수정·삭제할 수 있게 연다
create policy "누구나 조회 가능" on public.tasks
  for select to anon, authenticated using (true);

create policy "누구나 추가 가능" on public.tasks
  for insert to anon, authenticated with check (true);

create policy "누구나 수정 가능" on public.tasks
  for update to anon, authenticated using (true) with check (true);

create policy "누구나 삭제 가능" on public.tasks
  for delete to anon, authenticated using (true);

-- Data API(REST)로 이 테이블을 쓸 수 있는 권한
grant select, insert, update, delete on public.tasks to anon, authenticated;
